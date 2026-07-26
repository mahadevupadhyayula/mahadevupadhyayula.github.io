(function () {
  'use strict';

  var root = document.querySelector('[data-ask-mahadev]');

  if (!root) {
    return;
  }

  var endpoint = (root.getAttribute('data-endpoint') || '').trim();
  var openButton = root.querySelector('[data-ask-mahadev-open]');
  var closeButton = root.querySelector('[data-ask-mahadev-close]');
  var panel = root.querySelector('[data-ask-mahadev-panel]');
  var messages = root.querySelector('[data-ask-mahadev-messages]');
  var suggestions = root.querySelector('[data-ask-mahadev-suggestions]');
  var form = root.querySelector('[data-ask-mahadev-form]');
  var input = root.querySelector('[data-ask-mahadev-input]');
  var submitButton = root.querySelector('[data-ask-mahadev-submit]');
  var previousResponseId = '';
  var isSending = false;
  var lastFocusedElement = null;

  function track(eventName, details) {
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, details || {});
    }
  }

  function setPanelOpen(isOpen) {
    if (!panel || !openButton) {
      return;
    }

    panel.hidden = !isOpen;
    openButton.setAttribute('aria-expanded', String(isOpen));
    root.classList.toggle('ask-mahadev--open', isOpen);

    if (isOpen) {
      lastFocusedElement = document.activeElement;
      window.requestAnimationFrame(function () {
        input.focus();
      });
      track('ask_mahadev_open');
    } else if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus();
    }
  }

  function createMessage(role, text, sources, state) {
    var article = document.createElement('article');
    var avatar = document.createElement('span');
    var bubble = document.createElement('div');
    var copy = document.createElement('p');

    article.className = 'ask-mahadev__message ask-mahadev__message--' + role;
    avatar.className = 'ask-mahadev__avatar';
    avatar.setAttribute('aria-hidden', 'true');
    avatar.textContent = role === 'assistant' ? 'M' : 'You';
    bubble.className = 'ask-mahadev__bubble';
    copy.textContent = text;
    bubble.appendChild(copy);

    if (state) {
      article.setAttribute('data-state', state);
    }

    if (Array.isArray(sources) && sources.length > 0) {
      var sourceBlock = document.createElement('div');
      var sourceLabel = document.createElement('strong');
      var sourceList = document.createElement('div');

      sourceBlock.className = 'ask-mahadev__sources';
      sourceLabel.textContent = 'Sources';
      sourceList.className = 'ask-mahadev__source-links';

      sources.forEach(function (source) {
        if (!source || !source.url || !source.title) {
          return;
        }

        var link = document.createElement('a');
        link.href = source.url;
        link.textContent = source.title;
        sourceList.appendChild(link);
      });

      if (sourceList.children.length > 0) {
        sourceBlock.appendChild(sourceLabel);
        sourceBlock.appendChild(sourceList);
        bubble.appendChild(sourceBlock);
      }
    }

    article.appendChild(avatar);
    article.appendChild(bubble);
    messages.appendChild(article);
    messages.scrollTop = messages.scrollHeight;

    return article;
  }

  function replaceMessage(message, text, sources, state) {
    var bubble = message.querySelector('.ask-mahadev__bubble');

    if (!bubble) {
      return;
    }

    bubble.replaceChildren();

    var copy = document.createElement('p');
    copy.textContent = text;
    bubble.appendChild(copy);

    if (Array.isArray(sources) && sources.length > 0) {
      var sourceBlock = document.createElement('div');
      var sourceLabel = document.createElement('strong');
      var sourceList = document.createElement('div');

      sourceBlock.className = 'ask-mahadev__sources';
      sourceLabel.textContent = 'Sources';
      sourceList.className = 'ask-mahadev__source-links';

      sources.forEach(function (source) {
        if (!source || !source.url || !source.title) {
          return;
        }

        var link = document.createElement('a');
        link.href = source.url;
        link.textContent = source.title;
        sourceList.appendChild(link);
      });

      if (sourceList.children.length > 0) {
        sourceBlock.appendChild(sourceLabel);
        sourceBlock.appendChild(sourceList);
        bubble.appendChild(sourceBlock);
      }
    }

    message.setAttribute('data-state', state || 'complete');
    messages.scrollTop = messages.scrollHeight;
  }

  function setSending(sending) {
    isSending = sending;
    input.disabled = sending;
    submitButton.disabled = sending;
    submitButton.textContent = sending ? 'Thinking...' : 'Send';
    form.setAttribute('aria-busy', String(sending));
  }

  function isConfigured() {
    return endpoint && endpoint !== '#' && endpoint.indexOf('YOUR_SUPABASE_PROJECT_REF') === -1;
  }

  function ask(question) {
    var cleanedQuestion = (question || '').trim();

    if (!cleanedQuestion || isSending) {
      return;
    }

    if (!isConfigured()) {
      createMessage('assistant', 'Ask Mahadev is not connected yet. Please use the Work With Me page or email mahadev@mahadevupadhyayula.com.', [], 'error');
      return;
    }

    createMessage('user', cleanedQuestion, [], 'complete');
    var pendingMessage = createMessage('assistant', 'Searching Mahadev\'s website...', [], 'loading');

    if (suggestions) {
      suggestions.hidden = true;
    }

    input.value = '';
    setSending(true);
    track('ask_mahadev_question', { question_length: cleanedQuestion.length });

    fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: cleanedQuestion,
        previous_response_id: previousResponseId || null,
        page_url: window.location.href
      })
    })
      .then(function (response) {
        return response.json().catch(function () {
          return { success: false, message: 'The assistant returned an unreadable response.' };
        }).then(function (body) {
          return { ok: response.ok, body: body };
        });
      })
      .then(function (result) {
        if (!result.ok || !result.body.success || !result.body.answer) {
          throw new Error(result.body.message || 'The assistant could not answer that question.');
        }

        previousResponseId = result.body.response_id || previousResponseId;
        replaceMessage(pendingMessage, result.body.answer, result.body.sources || [], 'complete');
        track('ask_mahadev_answer', { source_count: (result.body.sources || []).length });
      })
      .catch(function (error) {
        replaceMessage(pendingMessage, error.message || 'I could not reach Ask Mahadev. Please try again shortly.', [], 'error');
      })
      .finally(function () {
        setSending(false);
        input.focus();
      });
  }

  function syncStickyCtaOffset() {
    var stickyCta = document.querySelector('.blog-sticky-cta');
    var isVisible = stickyCta && !stickyCta.hidden;
    document.body.classList.toggle('ask-mahadev-has-sticky-cta', Boolean(isVisible));
  }

  if (openButton) {
    openButton.addEventListener('click', function () {
      setPanelOpen(panel.hidden);
    });
  }

  if (closeButton) {
    closeButton.addEventListener('click', function () {
      setPanelOpen(false);
    });
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    ask(input.value);
  });

  input.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      ask(input.value);
    }
  });

  Array.prototype.slice.call(root.querySelectorAll('[data-ask-mahadev-suggestion]')).forEach(function (button) {
    button.addEventListener('click', function () {
      ask(button.textContent);
    });
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && panel && !panel.hidden) {
      setPanelOpen(false);
    }
  });

  syncStickyCtaOffset();
  var stickyCta = document.querySelector('.blog-sticky-cta');
  if (stickyCta && typeof MutationObserver !== 'undefined') {
    new MutationObserver(syncStickyCtaOffset).observe(stickyCta, { attributes: true, attributeFilter: ['hidden'] });
  }
}());
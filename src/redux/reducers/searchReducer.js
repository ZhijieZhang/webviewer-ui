export default initialState => (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SEARCH_TEXT': {
      const { searchValue, options = {} } = payload;
      const { caseSensitive, wholeWord, wildcard, regex, searchUp, ambientString } = options;
      return {
        ...state,
        value: searchValue,
        isCaseSensitive: caseSensitive,
        isWholeWord: wholeWord,
        isWildcard: wildcard,
        isRegex: regex,
        isSearchUp: searchUp,
        isAmbientString: ambientString,
        isProgrammaticSearch: true,
      };
    }
    case 'SEARCH_TEXT_FULL': {
      const { searchValue, options = {} } = payload;
      const { caseSensitive, wholeWord, wildcard, regex } = options;
      return {
        ...state,
        value: searchValue,
        isCaseSensitive: caseSensitive,
        isWholeWord: wholeWord,
        isWildcard: wildcard,
        isRegex: regex,
        isSearchUp: false,
        isAmbientString: true,
        isProgrammaticSearchFull: true,
      };
    }
    case 'ADD_SEARCH_LISTENER': {
      const { func } = payload;
      const { listeners } = state;

      return {
        ...state,
        listeners: [...listeners, func],
      };
    }
    case 'REMOVE_SEARCH_LISTENER': {
      const { func } = payload;
      let { listeners } = state;

      listeners = listeners.filter(oldFunc => oldFunc !== func);

      return {
        ...state,
        listeners: [...listeners],
      };
    }
    case 'SET_SEARCH_VALUE': {
      return {
        ...state,
        value: payload.value,
      };
    }
    case 'SET_IS_PROG_SEARCH': {
      return {
        ...state,
        isProgrammaticSearch: payload.isProgrammaticSearch,
      };
    }
    case 'SET_IS_PROG_SEARCH_FULL': {
      return {
        ...state,
        isProgrammaticSearchFull: payload.isProgrammaticSearchFull,
      };
    }
    case 'ADD_RESULT': {
      return {
        ...state,
        results: [...state.results, payload.result],
      };
    }
    case 'SET_CASE_SENSITIVE': {
      return {
        ...state,
        isCaseSensitive: payload.isCaseSensitive,
      };
    }
    case 'SET_WHOLE_WORD': {
      return {
        ...state,
        isWholeWord: payload.isWholeWord,
      };
    }
    case 'SET_WILD_CARD': {
      return {
        ...state,
        isWildcard: payload.isWildcard,
      };
    }
    case 'SET_SEARCH_ERROR': {
      return {
        ...state,
        errorMessage: payload.errorMessage,
      };
    }
    case 'RESET_SEARCH': {
      return {
        ...initialState,
        listeners: state.listeners,
        value: state.value,
        isCaseSensitive: state.isCaseSensitive,
        isWholeWord: state.isWholeWord,
        isWildcard: state.isWildcard,
      };
    }
    case 'SET_SEARCH_RESULTS': {
      return {
        ...state,
        results: payload,
      };
    }
    default:
      return state;
  }
};

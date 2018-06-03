// import React from 'react'

export function createMarkup(text) {
    return {__html: text};
  }

  export function text_truncate(str, length, ending) {
    if (length == null) {
      length = 100
    }
    if (ending == null) {
      ending = '...'
    }
    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending
    } else {
      return str
    }
  }
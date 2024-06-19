// src/Features/loginSlice.test.js

import { describe, it, expect } from 'vitest';
import loginReducer, { setUsername, setPassword } from './loginSlice';

describe('loginSlice reducer', () => {
  const initialState = {
    loginUser: null,
  };

  it('should handle initial state', () => {
    expect(loginReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle setUsername', () => {
    const stateWithUsername = loginReducer(initialState, setUsername('testUser'));
    expect(stateWithUsername.username).toEqual('testUser');
  });

  it('should handle setPassword', () => {
    const stateWithPassword = loginReducer(initialState, setPassword('testPassword'));
    expect(stateWithPassword.password).toEqual('testPassword');
  });
});

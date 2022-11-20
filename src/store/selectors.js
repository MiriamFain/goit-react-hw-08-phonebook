import { createSelector } from '@reduxjs/toolkit';

export const selectAllContacts = state => state.contacts.items;
export const selectFilter = state => state.filter;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectUser = state => state.auth.user;
export const selectToken = state => state.auth.token;

export const selectFilteredContacts = createSelector(
  [selectFilter, selectAllContacts],
  (filter, contacts) => {
    const optimizedFilter = filter.toLowerCase();
    return contacts.length
      ? contacts.filter(({ name }) =>
          name.toLowerCase().includes(optimizedFilter)
        )
      : [];
  }
);

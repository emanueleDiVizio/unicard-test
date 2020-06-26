import {slice, thunks} from './slice';

describe('state/user/slice', () => {
  describe('pending', () => {
    it('updates loading state if not loading', () => {
      expect(
        slice.reducer({isLoading: false}, thunks.getUsers.pending()),
      ).toMatchSnapshot();
    });
    it('does nothing if loading', () => {
      expect(
        slice.reducer({isLoading: true}, thunks.getUsers.pending()),
      ).toMatchSnapshot();
    });
  });
  describe('fulfilled', () => {
    it('stores new data if it was loading', () => {
      expect(
        slice.reducer(
          {isLoading: true},
          thunks.getUsers.fulfilled([{name: 'mockName'}]),
        ),
      ).toMatchSnapshot();
    });
    it('does nothing if it was not loading', () => {
      expect(
        slice.reducer(
          {isLoading: false},
          thunks.getUsers.fulfilled([{name: 'mockName'}]),
        ),
      ).toMatchSnapshot();
    });
  });
  describe('rejected', () => {
    it('does nothing if it was not loading', () => {
      expect(
        slice.reducer({isLoading: false}, thunks.getUsers.rejected()),
      ).toMatchSnapshot();
    });
    it('registers error if was present and request errored gracefully', () => {
      expect(
        slice.reducer({isLoading: true}, thunks.getUsers.rejected('PROBLEM')),
      ).toMatchSnapshot();
    });

    it('registers error if was present and request thrown', () => {
      expect(
        slice.reducer({isLoading: true}, thunks.getUsers.rejected()),
      ).toMatchSnapshot();
    });
  });
});

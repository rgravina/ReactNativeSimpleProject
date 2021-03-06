import { ActionConst } from 'react-native-router-flux';
import reducer from '../../src/redux/routes';

describe('routes', () => {
  describe('reducer', () => {
    it('starts with an empty scene', () => {
      expect(reducer()).toEqual({scene: {}})
    });

    it('stores scene when action is ActionConst.FOCUS', () => {
      const state = reducer({}, {type: ActionConst.FOCUS, scene: 'some-scene'})
      expect(state).toEqual({scene: 'some-scene'})
    });
  });
});

import watchFetchUserInfo from "./userInfo";

export default function* rootSaga() {
  yield [watchFetchUserInfo()];
}

import { IUser } from "./../_models/IUser";
import { ITrainingClass } from "./../_models/ITrainingClasses";
export const _setTrainingClass = (tc: ITrainingClass, user: IUser) => {
  tc.isGoing = tc.userTrainingClasses.some((x) => x.userName === user.userName);
  tc.isHost = tc.userTrainingClasses.some((x) => x.isHost);
  const { fullName, userName } = tc.userTrainingClasses.filter(
    (x) => x.isHost
  )[0];
  tc.hostName = fullName;
  tc.hostUserName = userName;
  return tc;
};

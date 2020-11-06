export const CountAcceptedFriendsFromUser = (user) => {
  if (user.friendship === undefined) {
    return 0;
  }
  const count = user.friendship.reduce((acc, curr) => {
    console.log(acc);

    return curr.accepted.length === 2 ? ++acc : acc;
  }, 0);
  return count;
};

export const whoAsked = (users, question) => {
  const user = users[question.author];
  return user ? user : {};
};

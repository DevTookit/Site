let navigateToLogin: () => void = () => {};

export const setNavigateToLogin = (navigateFn: () => void) => {
  navigateToLogin = navigateFn;
};

export const redirectToLogin = () => {
  navigateToLogin();
};

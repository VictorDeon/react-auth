export function getLoggedUser(state) {
  let user = undefined;
  if (state.account.user) {
    user = state.account.user;
  }

  if (!user) {
    const urlParams = state.router.location;
    if (urlParams.state) {
      user = urlParams.state.user;
    }
  }

  return user;
}

export function getParams(state) {
  return state.router.location.state;
}

export function hasPermission(requiredPermissions, userPermissions) {
  if (!requiredPermissions) return true;

  const allowedPermissions = new Set(requiredPermissions.filter(item => userPermissions.includes(item)));
  return allowedPermissions.size > 0;
}
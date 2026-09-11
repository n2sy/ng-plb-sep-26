import { CanDeactivateFn } from '@angular/router';

export const quitterFormGuard: CanDeactivateFn<unknown> = (
  component,
  currentRoute,
  currentState,
  nextState,
) => {
  if (component['isSubmitted']) return true;
  if (
    confirm(
      'Vous risquez de perdre vos données. Etes vous sûr de vouloir quitter sans soumettre ?',
    )
  )
    return true;
  return false;
};

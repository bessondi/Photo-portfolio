import ReactGA from 'react-ga'

export const analyticsHelper = (category, action, label) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label
  });
};

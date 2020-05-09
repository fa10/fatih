export type Theme = {
  typography: {
    fontFamily: string;
  };
  colors: {
    primary: string;
    secondary: string;
    white: string;
  };
};

export const theme: Theme = {
  typography: {
    fontFamily: 'brandon-grotesque, sans-serif',
  },
  colors: {
    primary: '#737373',
    secondary: '#d9d9d9',
    white: '#FFFFFF',
  },
};

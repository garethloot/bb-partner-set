(() => ({
  name: 'Backdrop',
  type: 'BODY_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { Backdrop, CircularProgress } = window.MaterialUI.Core;
    const { env } = B;
    const { spinnerSize, spinnerThickness } = options;
    const isDev = env === 'dev';

    return isDev ? (
      <div className={classes.preview}>
        <CircularProgress
          className={classes.progress}
          size={spinnerSize}
          thickness={spinnerThickness}
        />
      </div>
    ) : (
      <Backdrop className={classes.backdrop} open>
        <CircularProgress
          className={classes.progress}
          size={spinnerSize}
          thickness={spinnerThickness}
        />
      </Backdrop>
    );
  })(),
  styles: B => theme => {
    const style = new B.Styling(theme);
    return {
      preview: {
        padding: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        '-webkit-tap-highlight-color': 'transparent',
      },
      backdrop: {
        '&.MuiBackdrop-root': {
          zIndex: 999,
        },
      },
      progress: {
        '&.MuiCircularProgress-colorPrimary': {
          color: ({ options: { spinnerColor } }) =>
            style.getColor(spinnerColor),
        },
      },
    };
  },
}))();

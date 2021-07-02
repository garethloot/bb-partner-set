(() => ({
  name: 'Backdrop',
  type: 'BODY_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { Backdrop, CircularProgress } = window.MaterialUI.Core;
    const { env } = B;
    const isDev = env === 'dev';

    return isDev ? (
      <div>Backdrop</div>
    ) : (
      <Backdrop className={classes.backdrop} open>
        <CircularProgress className={classes.progress} />
      </Backdrop>
    );
  })(),
  styles: B => theme => {
    const style = new B.Styling(theme);
    return {
      backdrop: {
        '&.MuiBackdrop-root': {
          zIndex: 999,
          color: '#fff',
        },
      },
      progress: {
        '&.MuiCircularProgress-colorPrimary': {
          color: '#fff',
        },
      },
    };
  },
}))();

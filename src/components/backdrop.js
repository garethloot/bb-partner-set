(() => ({
  name: 'Backdrop',
  type: 'BODY_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { Backdrop, CircularProgress } = window.MaterialUI.Core;
    const { env } = B;
    const { spinnerSize, spinnerThickness, visibility } = options;
    const isDev = env === 'dev';

    const [open, setOpen] = useState(visibility);

    B.defineFunction('Show', () => setOpen(true));
    B.defineFunction('Hide', () => setOpen(false));
    B.defineFunction('ToggleShow', () => setOpen(e => !e));

    function handleClick() {
      setOpen(false);
      B.triggerEvent('onClose', 'Backdrop was closed');
    }

    return isDev ? (
      <div className={classes.preview}>
        <CircularProgress
          className={classes.progress}
          size={spinnerSize}
          thickness={spinnerThickness}
        />
      </div>
    ) : (
      <Backdrop className={classes.backdrop} open={open} onClick={handleClick}>
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

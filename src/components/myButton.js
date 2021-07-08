(() => ({
  name: 'My Button',
  type: 'BODY_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  styleType: 'BUTTON',
  jsx: (() => {
    const value = 'Example';
    return (
      <button type="button" className={classes.root}>
        {value}
      </button>
    );
  })(),
  styles: B => theme => {
    const styling = new B.Styling(theme);
    return {
      root: ({ style }) => ({
        ...style,
      }),
    };
  },
}))();

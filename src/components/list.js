(() => ({
  name: 'List',
  type: 'BODY_COMPONENT',
  allowedTypes: ['BODY_COMPONENT', 'CONTENT_COMPONENT', 'CONTAINER_COMPONENT'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { useAllQuery, ModelProvider, env } = B;
    const { model, filter } = options;

    const isDev = env === 'dev';
    const isEmpty = children.length === 0;

    const { loading, error, data, refetch } =
      model &&
      useAllQuery(model, {
        filter,
        onCompleted(response) {},
        onError(error) {},
      });

    if (loading) {
      return <div>Loading</div>;
    }

    if (error) {
      return <div>Error</div>;
    }

    const DataList = () => {
      const { results = [], totalCount } = data;
      return (
        <>
          <ul className={classes.root}>
            {results.map(item => (
              <ModelProvider value={item} id={model}>
                {children}
              </ModelProvider>
            ))}
          </ul>
          <p>total count: {totalCount}</p>
        </>
      );
    };

    return isDev ? (
      <ul className={classes.root}>
        {isEmpty ? `List: ${!model ? 'Select model option' : ''}` : children}
      </ul>
    ) : (
      <DataList />
    );
  })(),
  styles: B => theme => {
    const style = new B.Styling(theme);
    return {
      root: {
        minHeight: '20px',
      },
    };
  },
}))();

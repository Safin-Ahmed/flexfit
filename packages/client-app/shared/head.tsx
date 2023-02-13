type titleProps = {
  title: string;
};

const PageHead = ({ title }: titleProps): JSX.Element => {
  return (
    <>
      <title>{title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta
        name="description"
        content="Workout Application || Made with ❤️ by Syntax Brawlers"
      />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
};

export default PageHead;

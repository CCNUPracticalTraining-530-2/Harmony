const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const cover = 'https://t.tutu.to/img/m1IOz';

  return (
    <div
      className="flex h-full items-center justify-center"
      style={{
        background: `url(${cover}) center/cover no-repeat`,
      }}
    >
      <div className="md:-ml-[40%]">{children}</div>
    </div>
  );
};

export default AuthLayout;

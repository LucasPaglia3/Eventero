type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className="max-w-full min-h-screen mx-auto flex flex-col">
      {children}
    </div>
  );
}

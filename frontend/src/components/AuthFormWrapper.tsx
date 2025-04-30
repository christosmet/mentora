// src/components/AuthFormWrapper.tsx
interface AuthFormWrapperProps {
  title: string;
  children: React.ReactNode;
}

const AuthFormWrapper = ({ title, children }: AuthFormWrapperProps) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default AuthFormWrapper;

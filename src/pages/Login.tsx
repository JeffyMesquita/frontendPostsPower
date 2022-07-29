import { Button } from "../components/Button";
import { Input } from "../components/Input";

const Login: React.FC = () => {
  return (
    <div className="w-full">
      <header className="w-full h-[100px] flex justify-center items-center">
        <h1 className="font-bold text-3xl">Posts Power</h1>
      </header>
      <main className="flex items-center justify-center mt-6">
        <div className="bg-slate-800 w-[400px] h-auto p-8 shadow">
          <form className="flex gap-4 flex-col">
            <h1 className="text-center text-2xl font-bold">Login</h1>
            <Input type="text"/>
            <Input type="password"/>
            <Button 
              description="Entrar"
            />
          </form>
        </div>
      </main>
    </div>
  );
};

export { Login };

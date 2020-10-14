import { Btn, Input } from '../components/Utils';

const Index = () => (
  <div className="grid min-h-screen bg-purple-100 place-items-center">
    <h1 className="text-5xl font-bold text-purple-500 ">
      Hello there!
    </h1>
    <div className="align-self-start">
      <Input name="search" />
      <Btn label="Submit" />
    </div>
  </div>
);
export default Index;

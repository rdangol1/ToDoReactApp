const App = () => {
  return (
    <div className="contatiner py-20 mx-auto max-w-md">
      <div className="bg-white rounded-lg p-10 text-black shadow">
      <div className="border-b-2 p-2 ">
          <input className=" mr-5" type="checkbox" id="first"/>
          <label className="text-gray-700" id="first">finish to do list</label>
          </div>
        <div className="border-b-2 p-2 ">
          <input className=" mr-5" type="checkbox" id="first"/>
          <label className="text-gray-300 line-through " id="first">finish to do list</label>
          </div>

      </div>
    </div>
  );
};

export default App;

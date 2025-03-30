export default function CustomNavbar() {
  return (
    <div className="flex justify-center">
      <div className="bg-transparent flex items-center w-3/4 border-2 border-slate-100 rounded-lg p-4 justify-between"> {/* Added justify-between */}
        <div className="pr-16">My Logo</div>
        {/* <div className="flex space-x-6  "> 
          <span className="font-bold capitalize hover:underline underline-offset-8">Gaussian Naive Bayes</span>
          <span className="font-bold capitalize hover:underline underline-offset-8">TEXT</span>
          <span className="font-bold capitalize hover:underline underline-offset-8">TEXT</span>
          <span className="font-bold capitalize hover:underline underline-offset-8">TEXT</span>
        </div> */}
      </div>
    </div>
  );
}

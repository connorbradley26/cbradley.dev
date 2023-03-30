const WIPNotice = () => {
    return (
        <div className="fixed right-10 top-10 z-40 ">
        <div className=" w-full  overflow-hidden rounded-lg bg-zinc-600/60 shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="p-4">
                    <div className="ml-3  pt-0.5">
                        <p className="text-base font-medium text-zinc-100">Work In Progress! 👷</p>
                        <p className="mt-1 text-sm text-gray-300">I'm currently working on Coverr, I'll finish this site afterwards.</p>
                    </div>
            </div>
        </div>
        </div>
    );
};

export default WIPNotice;
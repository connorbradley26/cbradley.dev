

const Container = (props: any) => {
    return (
        <>
            <div className="fixed inset-0 flex justify-center  -z-10">
                <div className="flex w-full ">
                    <div className="w-full  bg-zinc-900 border-l border-r border-zinc-700">
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto my-10">
            {props.children}
            </div>
        </>
    );
};

export default Container;
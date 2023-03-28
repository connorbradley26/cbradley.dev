

const Container = (props: any) => {
    return (
        <>
            <div className="fixed inset-0 flex justify-center sm:px-8 -z-10">
                <div className="flex w-full max-w-7xl lg:px-8">
                    <div className="w-full  bg-zinc-900 border-l border-r border-zinc-700">
                    </div>
                </div>
            </div>
            <div className="max-w-5xl mx-auto my-10">
            {props.children}
            </div>
        </>
    );
};

export default Container;
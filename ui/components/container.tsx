

const Container = (props: any) => {
    return (
        <div className="max-w-7xl border-l border-r border-zinc-700 mx-auto bg-zinc-900 min-h-screen py-10 px-10 text-white">
            {props.children}
        </div>
    );
};

export default Container;
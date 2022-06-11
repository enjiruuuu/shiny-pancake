import '../styles/popover.css';

const Popover: React.FC<any> = (props: any) => {
    return (
        <div className="c_popover">
            { props.children }
        </div>
    );
};

export default Popover;
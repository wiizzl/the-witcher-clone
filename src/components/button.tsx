type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: ButtonProps) => {
    return <button className={`cursor-pointer ${props.className}`}>{props.children}</button>;
};

export { Button };

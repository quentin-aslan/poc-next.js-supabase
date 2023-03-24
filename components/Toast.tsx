type Props = {
    message: string,
    type: 'error' | 'success' | 'warning' | 'info'
}
export default function Toast (props: Props) {
    return (
        <div className="toast toast-top toast-center min-w-max">
            <div className={`alert alert-${props.type}`}>
                <div>
                    <span>{props.message}</span>
                </div>
            </div>
        </div>
    )
}
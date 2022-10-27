export default function Button({teks, action}){
    return(
        <div>
            <a className="btn btn-primary" onClick={action}>{teks}</a>
        </div>
    )
}
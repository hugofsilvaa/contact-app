const Contact = ({ photo, contactName, online }) => {
    return (
        <div className="Contact">
            <img className="avatar" src={photo} alt={contactName} />
            <div>
                <p className="name">{contactName}</p>
                <div className="status">
                    <span className={online ? "status-online" : "status-offline"}></span>
                    <p className="status-text">{online ? "online" : "off-line"}</p>
                </div>
            </div>
        </div >

    );
}

export default Contact
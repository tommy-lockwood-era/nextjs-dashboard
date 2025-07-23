export default function Footer() {
    const styles = {
        'align-items': 'center',
        'justify-content': 'center'
    }

    return(
        <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-3">
                <img src='/image.png' />
                <img src='/image.png' />
                <img src='/image.png' />
                <img src='/image.png' />
                <img src='/image.png' />
            </div>
            <div className="flex flex-row gap-3">
                <img src='/image.png' />
                <img src='/image.png' />
                <img src='/image.png' />
            </div>
        </div>
    );
}
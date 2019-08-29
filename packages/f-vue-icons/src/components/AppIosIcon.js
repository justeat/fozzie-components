export default {
    name: 'AppIosIcon',

    props: {
    },

    functional: true,

    render(h, ctx) {
        const attrs = ctx.data.attrs || {}
        ctx.data.attrs = attrs

        return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135 40" class="ficon ficon-app-ios" {...ctx.data}><path fill="#A6A6A6" d="M130.197 40H4.73A4.739 4.739 0 0 1 0 35.267V4.727A4.734 4.734 0 0 1 4.73 0h125.467C132.803 0 135 2.12 135 4.726v30.54c0 2.606-2.197 4.734-4.803 4.734z"></path><path d="M134.032 35.268a3.83 3.83 0 0 1-3.834 3.83H4.728a3.835 3.835 0 0 1-3.838-3.83V4.725A3.84 3.84 0 0 1 4.73.89h125.467c2.12 0 3.834 1.72 3.834 3.835l.003 30.543z"></path><path fill="#FFF" d="M30.128 19.784c-.03-3.223 2.64-4.79 2.76-4.864-1.51-2.203-3.852-2.504-4.675-2.528-1.967-.207-3.875 1.177-4.877 1.177-1.022 0-2.565-1.16-4.228-1.125-2.14.033-4.142 1.272-5.24 3.196-2.266 3.924-.576 9.69 1.595 12.86 1.086 1.553 2.355 3.287 4.016 3.226 1.623-.067 2.23-1.036 4.19-1.036 1.944 0 2.514 1.037 4.208.998 1.743-.028 2.84-1.56 3.89-3.127 1.254-1.78 1.758-3.53 1.778-3.62-.04-.015-3.387-1.29-3.42-5.155zm-3.2-9.478c.874-1.093 1.472-2.58 1.306-4.09-1.265.057-2.847.876-3.758 1.945-.806.944-1.526 2.488-1.34 3.94 1.42.106 2.88-.717 3.792-1.793zm26.717 21.198h-2.27l-1.245-3.91h-4.324l-1.185 3.91h-2.21l4.285-13.308h2.646l4.306 13.308zm-3.89-5.55L48.63 22.48c-.12-.355-.342-1.19-.67-2.507h-.04c-.132.566-.343 1.402-.633 2.507l-1.105 3.475h3.573zm14.907.634c0 1.632-.44 2.922-1.323 3.87-.79.842-1.773 1.263-2.944 1.263-1.264 0-2.172-.452-2.725-1.36h-.04v5.055H55.5V25.067c0-1.026-.027-2.08-.08-3.16h1.876l.12 1.522h.04c.71-1.148 1.79-1.72 3.237-1.72 1.132 0 2.077.447 2.833 1.342.758.896 1.136 2.074 1.136 3.535zm-2.172.078c0-.934-.21-1.704-.632-2.31-.46-.632-1.08-.948-1.856-.948-.526 0-1.004.176-1.43.523-.43.35-.71.81-.84 1.375-.066.264-.1.48-.1.65v1.6c0 .698.215 1.287.643 1.768s.984.72 1.668.72c.803 0 1.428-.31 1.875-.927.448-.62.672-1.435.672-2.45zm13.21-.078c0 1.632-.442 2.922-1.325 3.87-.79.842-1.77 1.263-2.94 1.263-1.265 0-2.173-.452-2.725-1.36h-.04v5.055h-2.132V25.067c0-1.026-.027-2.08-.08-3.16h1.876l.12 1.522h.04c.71-1.148 1.788-1.72 3.237-1.72 1.133 0 2.078.447 2.836 1.342.755.896 1.134 2.074 1.134 3.535zm-2.173.078c0-.934-.21-1.704-.633-2.31-.46-.632-1.078-.948-1.855-.948a2.22 2.22 0 0 0-1.434.523c-.428.35-.707.81-.838 1.375-.066.264-.1.48-.1.65v1.6c0 .698.214 1.287.64 1.768.428.48.984.72 1.67.72.803 0 1.428-.31 1.875-.927.448-.62.672-1.435.672-2.45zm14.513 1.106c0 1.132-.394 2.053-1.183 2.764-.867.777-2.074 1.165-3.625 1.165-1.432 0-2.58-.274-3.45-.827l.495-1.777c.936.566 1.963.85 3.082.85.8 0 1.426-.182 1.875-.544.447-.36.67-.847.67-1.453 0-.54-.184-.996-.553-1.365-.367-.37-.98-.712-1.836-1.03-2.33-.868-3.494-2.14-3.494-3.815 0-1.094.408-1.99 1.225-2.69.814-.698 1.9-1.047 3.258-1.047 1.21 0 2.217.212 3.02.633l-.533 1.738c-.75-.407-1.598-.61-2.547-.61-.75 0-1.336.184-1.756.552a1.58 1.58 0 0 0-.534 1.205c0 .527.203.96.61 1.304.356.316 1 .658 1.937 1.027 1.145.46 1.986 1 2.527 1.62.54.615.81 1.386.81 2.306zm7.048-4.264h-2.35v4.66c0 1.184.414 1.776 1.244 1.776.38 0 .697-.033.947-.1l.057 1.62c-.42.157-.973.236-1.658.236-.843 0-1.5-.257-1.976-.77-.473-.514-.71-1.376-.71-2.587v-4.837h-1.4v-1.6h1.4V20.15l2.093-.633v2.39h2.35v1.6zm10.602 3.12c0 1.474-.42 2.685-1.263 3.632-.883.975-2.055 1.46-3.516 1.46-1.406 0-2.527-.466-3.363-1.4s-1.254-2.113-1.254-3.534c0-1.487.43-2.705 1.293-3.652.86-.948 2.023-1.422 3.484-1.422 1.407 0 2.54.467 3.395 1.402.818.907 1.226 2.078 1.226 3.513zm-2.21.07c0-.887-.19-1.646-.573-2.28-.447-.766-1.086-1.15-1.914-1.15-.857 0-1.508.385-1.955 1.15-.383.634-.572 1.405-.572 2.317 0 .885.19 1.644.572 2.276.46.767 1.105 1.15 1.936 1.15.814 0 1.453-.39 1.914-1.17.393-.644.59-1.41.59-2.295zm9.14-2.915c-.21-.04-.435-.06-.67-.06-.75 0-1.33.284-1.74.85-.354.5-.532 1.133-.532 1.896v5.033h-2.13l.02-6.574a52.97 52.97 0 0 0-.08-3.02h1.856l.078 1.834h.06c.224-.63.58-1.14 1.065-1.52a2.577 2.577 0 0 1 1.54-.514c.198 0 .376.015.534.04v2.033zm9.536 2.47c0 .38-.025.703-.078.966h-6.396c.025.946.334 1.67.928 2.17.54.448 1.236.67 2.092.67.947 0 1.81-.15 2.588-.452l.334 1.48c-.908.395-1.98.592-3.217.592-1.488 0-2.656-.438-3.506-1.313-.846-.876-1.27-2.05-1.27-3.525 0-1.447.394-2.652 1.185-3.613.828-1.027 1.947-1.54 3.355-1.54 1.382 0 2.43.513 3.14 1.54.563.814.846 1.822.846 3.02zm-2.033-.554c.014-.634-.125-1.18-.414-1.64-.37-.594-.938-.89-1.7-.89-.698 0-1.265.29-1.698.87-.355.46-.566 1.013-.63 1.657h4.44zM49.05 10.01c0 1.176-.353 2.062-1.058 2.657-.653.55-1.58.824-2.783.824a12.96 12.96 0 0 1-1.535-.076v-6.43c.557-.09 1.157-.137 1.805-.137 1.146 0 2.01.25 2.59.747.653.563.98 1.368.98 2.416zm-1.105.028c0-.763-.202-1.348-.606-1.756-.406-.407-.996-.61-1.773-.61-.33 0-.61.02-.844.067v4.887c.13.02.365.03.708.03.803 0 1.42-.224 1.858-.67s.655-1.096.655-1.95zm6.965 1c0 .724-.208 1.32-.622 1.784-.434.48-1.01.718-1.727.718-.69 0-1.24-.23-1.652-.69-.41-.458-.615-1.037-.615-1.735 0-.73.21-1.33.635-1.794s.994-.696 1.712-.696c.69 0 1.247.23 1.668.688.4.447.6 1.023.6 1.727zm-1.088.033c0-.433-.094-.806-.28-1.117-.22-.376-.534-.564-.94-.564-.422 0-.742.187-.962.563-.188.31-.28.69-.28 1.138 0 .436.093.81.28 1.12.227.376.543.564.95.564.4 0 .715-.19.94-.574.195-.318.292-.694.292-1.13zm8.943-2.35l-1.475 4.713h-.96l-.61-2.047c-.156-.51-.282-1.02-.38-1.523h-.02c-.09.518-.216 1.025-.378 1.523l-.65 2.047h-.97L55.935 8.72h1.077l.533 2.24c.13.53.235 1.035.32 1.513h.02c.077-.394.206-.896.388-1.503l.67-2.25h.853l.64 2.202c.156.537.282 1.054.38 1.552h.028c.07-.485.178-1.002.32-1.552l.572-2.202h1.03zm5.433 4.713H67.15v-2.7c0-.832-.316-1.248-.95-1.248a.947.947 0 0 0-.757.343c-.193.23-.29.5-.29.808v2.796h-1.05v-3.366c0-.414-.012-.863-.037-1.35h.92l.05.738h.03c.12-.23.303-.418.542-.57a1.78 1.78 0 0 1 .95-.264c.44 0 .806.142 1.097.427.362.35.543.87.543 1.562v2.822zm2.89 0H70.04V6.556h1.048v6.877zm6.17-2.396c0 .725-.207 1.32-.62 1.785-.435.48-1.01.718-1.728.718-.693 0-1.244-.23-1.654-.69-.41-.458-.615-1.037-.615-1.735 0-.73.213-1.33.637-1.794s.994-.696 1.71-.696c.694 0 1.25.23 1.67.688.4.447.602 1.023.602 1.727zm-1.088.034c0-.433-.094-.806-.28-1.117-.22-.376-.534-.564-.94-.564-.422 0-.742.187-.96.563-.19.31-.282.69-.282 1.138 0 .436.094.81.28 1.12.228.376.544.564.952.564.4 0 .713-.19.94-.574.194-.318.29-.694.29-1.13zm6.16 2.363h-.94l-.08-.543h-.028c-.322.433-.78.65-1.377.65-.445 0-.805-.143-1.076-.427a1.333 1.333 0 0 1-.37-.96c0-.576.24-1.015.722-1.32.482-.303 1.16-.452 2.033-.445v-.09c0-.62-.326-.93-.98-.93a2.19 2.19 0 0 0-1.228.348l-.213-.688c.438-.27.98-.407 1.617-.407 1.233 0 1.85.65 1.85 1.95v1.736c0 .47.024.844.07 1.122zm-1.088-1.62v-.727c-1.156-.02-1.734.297-1.734.95 0 .246.066.43.2.553a.75.75 0 0 0 .513.182c.23 0 .447-.073.643-.218a.89.89 0 0 0 .38-.742zm7.043 1.62h-.93l-.05-.757h-.028c-.297.576-.803.864-1.514.864-.568 0-1.04-.223-1.416-.67s-.562-1.024-.562-1.735c0-.763.203-1.38.61-1.853.396-.44.88-.66 1.456-.66.635 0 1.078.213 1.33.64h.02V6.556h1.05v5.607c0 .46.01.882.036 1.27zm-1.085-1.99v-.786c0-.138-.01-.248-.03-.33a1.193 1.193 0 0 0-.38-.637 1.032 1.032 0 0 0-.7-.257c-.39 0-.697.155-.922.466-.223.31-.336.708-.336 1.193 0 .466.107.844.322 1.135.227.31.533.466.916.466.344 0 .62-.13.828-.388.202-.24.3-.527.3-.863zm10.048-.408c0 .725-.207 1.32-.62 1.785-.435.48-1.01.718-1.728.718-.69 0-1.242-.23-1.654-.69-.41-.458-.615-1.037-.615-1.735 0-.73.213-1.33.637-1.794s.994-.696 1.713-.696c.69 0 1.247.23 1.667.688.4.447.6 1.023.6 1.727zm-1.086.034c0-.433-.094-.806-.28-1.117-.222-.376-.534-.564-.942-.564-.42 0-.74.187-.96.563-.19.31-.282.69-.282 1.138 0 .436.094.81.28 1.12.228.376.544.564.952.564.4 0 .715-.19.94-.574.194-.318.292-.694.292-1.13zm6.72 2.363h-1.046v-2.7c0-.832-.316-1.248-.95-1.248-.312 0-.563.114-.757.343s-.293.5-.293.808v2.796h-1.05v-3.366c0-.414-.01-.863-.036-1.35h.92l.05.738h.03c.122-.23.304-.418.542-.57.285-.175.602-.264.95-.264.44 0 .806.142 1.097.427.362.35.542.87.542 1.562v2.822zm7.054-3.93h-1.154v2.29c0 .583.205.874.61.874.19 0 .345-.016.468-.05l.027.796c-.207.078-.48.117-.814.117-.414 0-.736-.126-.97-.378-.233-.252-.35-.676-.35-1.27v-2.38h-.688V8.72h.69v-.865l1.026-.31v1.173h1.156v.786zm5.548 3.93h-1.05v-2.68c0-.845-.315-1.268-.948-1.268-.486 0-.818.245-1 .735-.03.103-.05.23-.05.377v2.835h-1.046V6.556h1.047v2.84h.02c.33-.516.803-.774 1.416-.774.434 0 .793.142 1.078.427.357.353.535.88.535 1.58v2.802zm5.723-2.58c0 .188-.014.346-.04.475h-3.142c.014.466.164.82.455 1.067.266.22.61.33 1.03.33a3.47 3.47 0 0 0 1.27-.223l.164.728c-.447.194-.973.29-1.582.29-.73 0-1.305-.214-1.72-.644-.42-.43-.626-1.007-.626-1.73 0-.712.193-1.304.582-1.776.406-.504.955-.756 1.648-.756.678 0 1.193.252 1.54.756.282.4.42.895.42 1.483zm-1-.27c.008-.312-.06-.58-.203-.806-.182-.29-.46-.437-.834-.437a.996.996 0 0 0-.834.427 1.577 1.577 0 0 0-.31.815h2.18z"></path></svg>
    }
}
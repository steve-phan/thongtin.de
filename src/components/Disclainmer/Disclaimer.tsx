import React from "react"

import * as disclainmerStyles from "./Disclaimer.module.css"

const Disclaimer = () => {
  return (
    <div className={disclainmerStyles.container}>
      <div className={disclainmerStyles.header}>
        Legal Notice, Terms and Privacy Policy
      </div>
      <article>
        <h5>
          Information in accordance with § 5 German Broadcast Media Act (TMG)
          and responsible for content according to § 55 paragraph 2 RStV:
        </h5>
        <div className={disclainmerStyles.contact}>
          <p>Steve Phan</p>
          <p>Gotlinder str 37</p>
          <p>13065 Berlin</p>
          <p>Email: vietappeu@gmail.com</p>
        </div>
        <div className="item">
          <h5>Responsibility for Content</h5>
          <p>
            We try our best to make sure that the information on our pages is
            accurate and up-to-date. However, we are not liable for any errors
            or omissions in the content. As a service provider, we are only
            responsible for our own content on this web page according to § 7,
            Paragraph 1 of the German Broadcast Media Act (TMG) and other laws.
            We are not required to check or monitor any external information
            that we transmit or store on this web page, or to investigate any
            illegal activity related to it. We still have to follow the law and
            remove or block any information that is unlawful. But we can only be
            held liable for this if we know about the specific violation of law.
            If we find out about any such violations, we will remove the content
            right away.
          </p>
        </div>
        <div className="item">
          <h5>Data and Privacy Protection/Data Privacy</h5>
          <p>
            We respect your privacy and do not collect any personal data from
            you unless you voluntarily provide it to us. We will not share your
            data with anyone else without your consent. Please read our General
            Terms and Conditions for more details. Please note that data
            transmission over the internet (e.g. via e-mail) is not completely
            secure and we cannot guarantee the protection of your data from
            third parties. We do not allow third parties to use our contact
            information for sending unsolicited advertisements or information.
            We will take legal action if we receive any spam mail or other
            unwanted messages.
          </p>
        </div>

        <div className="item">
          <h5>Data Privacy Protection when using Google Analytics</h5>
          <p>
            We use Google Analytics, a service that helps us analyze how
            visitors use our website. Google Analytics uses cookies, which are
            small files that store information on your device. These cookies
            collect data about your website usage and send it to Google servers
            in the US. Google may also share this data with other parties if
            required by law or for processing purposes12. We have enabled IP
            anonymisation on our website, which means that Google will mask your
            IP address before sending it to their servers. This reduces the
            chance of identifying you personally3. However, this may not apply
            in some rare cases where Google needs to send your full IP address
            for technical reasons4. You can opt out of Google Analytics by
            changing your browser settings or
            <a href="https://tools.google.com/dlpage/gaoptout">
              {" "}
              installing a browser add-on that blocks Google Analytics
            </a>
          </p>
        </div>
      </article>
    </div>
  )
}

export default Disclaimer

import SwiftUI
import AlertToast

struct AlertToastContentView: View {
    private var mode: AlertToast.DisplayMode = .alert
    private var type: AlertToast.AlertType = .regular
    private var title: String = ""
    private var subTitle: String? = nil
    
    @State private var showingAlert = false
    
    init(mode: AlertToast.DisplayMode, type: AlertToast.AlertType, title: String, subTitle: String?) {
        self.mode = mode
        self.type = type
        self.title = title
        self.subTitle = subTitle
    }
    
    var body: some View {
        VStack {
        }
        .frame(
            minWidth: 0,
            maxWidth: .infinity,
            minHeight: 0,
            maxHeight: .infinity,
            alignment: .topLeading
        )
        .toast(isPresenting: $showingAlert, duration: 0, tapToDismiss: false) {
            AlertToast(displayMode: mode, type: type, title: title, subTitle: subTitle)
        }
        .onAppear() {
            showingAlert.toggle()
        }
    }
}

@objc(IosAlertToastViewManager)
class IosAlertToastViewManager: RCTViewManager {
    override func view() -> (IosAlertToastView) {
        return IosAlertToastView()
    }
    
    @objc override static func requiresMainQueueSetup() -> Bool {
        return false
    }
}

class IosAlertToastView : UIView {
    @objc var toast: [String: Any] = [:] {
        didSet {
            setupView(toast)
        }
    }
    
    func setupView(_ data: [String: Any]) {
        self.backgroundColor = .clear
        
        let toastTitle: String = data["title"] as! String
        
        let toastSubtitle: String? = data["subTitle"] as? String
        
        let toastMode: AlertToast.DisplayMode = switch data["mode"] as? String {
        case "alert": .alert
        case "banner-pop": .banner(.pop)
        case "banner-slide": .banner(.slide)
        case "hud": .hud
        default: .alert
        }
        
        let toastType: AlertToast.AlertType = switch data["type"] as? String {
        case "regular": .regular
        case "error": .error(Color.red)
        case "complete": .complete(Color.green)
        case "loading": .loading
        default: .regular
        }
        
        let contentView = AlertToastContentView(mode: toastMode, type: toastType, title: toastTitle, subTitle: toastSubtitle)
        
        let alertToastView: UIView = UIHostingController(rootView: contentView).view
        addSubview(alertToastView)
        
        alertToastView.backgroundColor = .clear
        alertToastView.translatesAutoresizingMaskIntoConstraints = false
        
        NSLayoutConstraint.activate([
            alertToastView.centerXAnchor.constraint(equalTo: self.centerXAnchor),
            alertToastView.centerYAnchor.constraint(equalTo: self.centerYAnchor),
            alertToastView.widthAnchor.constraint(equalTo: self.widthAnchor),
            alertToastView.heightAnchor.constraint(equalTo: self.heightAnchor)
        ])
    }
}

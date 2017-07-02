import 'package:angular2/angular2.dart';
import 'package:angular2/core.dart';
import 'package:angular_components/angular_components.dart';
import 'package:erlantzoniga.com/model/profile.dart';
import 'package:erlantzoniga.com/service/profile_service.dart';
import 'package:erlantzoniga.com/view/about_me/about_me.dart';

@Component(
    selector: 'my-app',
    styleUrls: const ['app_component.css'],
    templateUrl: 'app_component.html',
    directives: const[
      materialDirectives,
      MaterialTabComponent,
      MaterialTabPanelComponent,
      AboutMe,
    ],
    providers: const[
      materialProviders,
      ProfileService,
    ]
)
class AppComponent {
}

import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';
import 'package:erlantzoniga.com/service/profile_service.dart';
import 'package:erlantzoniga.com/view/about_me/about_me.dart';

@Component(
    selector: 'my-app',
    styleUrls: const [
      'package:angular_components/app_layout/layout.scss.css',
      'app_component.css'
    ],
    templateUrl: 'app_component.html',
    directives: const [
      MaterialButtonComponent,
      MaterialIconComponent,
      AboutMe,
    ],
    providers: const [
      materialProviders,
      ProfileService,
    ])
class AppComponent {
  void sayHello() {
    print("hello");
  }
}

import 'package:angular/angular.dart';
import 'package:angular/core.dart';
import 'package:erlantzoniga.com/model/profile.dart';
import 'package:erlantzoniga.com/service/profile_service.dart';

@Component(
  selector: 'about-me',
//  styleUrls: const ['about_me.css'],
  templateUrl: 'about_me.html',
  directives: const [NgFor],
)
class AboutMe {
  Profile profile;

  AboutMe(ProfileService profileService)
      : profile = profileService.getProfile();
}

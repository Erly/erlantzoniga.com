import 'package:angular/angular.dart';
import 'package:erlantzoniga.com/model/profile.dart';

@Injectable()
class ProfileService {
  Profile getProfile() => new Profile()
    ..firstName = 'Erlantz'
    ..secondName = 'Oniga'
    ..bio = "Test biography";
}

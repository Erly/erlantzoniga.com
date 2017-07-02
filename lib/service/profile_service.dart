import 'package:erlantzoniga.com/model/profile.dart';
import 'package:angular2/angular2.dart';

@Injectable()
class ProfileService {
  Profile getProfile() => new Profile()
      ..firstName = 'Erlantz'
      ..secondName = 'Oniga'
      ..bio = "Test biography";
}
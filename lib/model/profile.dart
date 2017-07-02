import 'package:erlantzoniga.com/model/contact_info.dart';
import 'package:erlantzoniga.com/model/project_info.dart';

class Profile {
  String firstName;
  String secondName;
  String bio;
  List<ContactInfo> contactInfo;
  List<ProjectInfo> projects;

  get fullName => '$firstName $secondName';
}
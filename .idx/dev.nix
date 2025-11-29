{ pkgs }:

pkgs.mkShell {
  packages = [
    pkgs.python311
    pkgs.python311Packages.pip
    pkgs.python311Packages.flask
    pkgs.python311Packages.werkzeug
    pkgs.python311Packages.pytesseract
    pkgs.python311Packages.pillow
    pkgs.python311Packages.numpy
    pkgs.opencv
  ];

  web = {
    command = "python3 ui/app.py";
    manager = "web";
  };
}
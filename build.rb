#!/usr/bin/env ruby

require 'json'

# Pull extension information
build_file = File.join(File.dirname(__FILE__), 'build.json')
build_file_contents = File.read(build_file)
build = JSON(build_file_contents)

extensions = []

build["extensions"].each do |ext|

  # Grab the extensions base dir
  ext_base_dir = File.join(File.dirname(__FILE__), ext)

  # Grab and parse the extension's manifest
  manifest_file = File.join(ext_base_dir, 'manifest.json')
  manifest_contents = File.read(manifest_file)

  manifest = JSON(manifest_contents)

  # Next, we're going to validate the manifest
  if manifest["id"].nil? || manifest["version"].nil?
    raise "Manifest #{manifest_file} missing 'id' or 'version' tags"
  end

  # For each key "pageScript" or "panelScript", we're going to read the relevant file and minify
  {"pageScriptFile" => "pageScript", "panelScriptFile" => "panelScript" }.each do |script_file_type, script_type|
    if manifest[script_file_type]

      script_file = manifest[script_file_type]

      # Do a simple check against reading personal files
      raise "Invalid script file" if script_file.include?('..') || script_file[0] == '/'

      # Otherwise, let's read the file
      # This isn't meant to be super secure, just better
      script_body = File.read(File.join(ext_base_dir,script_file))

      # TODO: Minify contents
      minified_contents = script_body

      closed_contents = "(function() { #{minified_contents} })()"

      # Note, we're mutating the contents of manifest
      manifest.delete script_file_type
      manifest[script_type] = closed_contents
    end
  end

  # Similar for HTML files
  {"panelBodyFile" => "panelBody" }.each do |html_file_type, html_type|
    if manifest[html_file_type]

      html_file = manifest[html_file_type]

      # Do a simple check against reading personal files
      raise "Invalid html file" if html_file.include?('..') || html_file[0] == '/'

      # Otherwise, let's read the file
      # This isn't meant to be super secure, just better
      html_body = File.read(File.join(ext_base_dir, html_file))

      # Note, we're mutating the contents of manifest
      manifest.delete html_file_type
      manifest[html_type] = html_body

    end

  end

  extensions << manifest
end

extensions_file = File.join(File.dirname(__FILE__), 'BaseExtensions.json')

File.open(extensions_file, 'w') do |f|
  f.write extensions.to_json
end

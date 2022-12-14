desc 'Combine git add, commit and push with a message'
task :push_changes, [:commit_message] do |t, args|
  commit_message = args.commit_message
  exec "git add ."
  exec "git commit -m '#{commit_message}'"
  exec "git push"
end
=begin
Request the user to input a string in which all 's' characters will be replaced
with "th"
=end

print "Thtring, pleathe!: "
user_input = gets.chomp		# Have to do this in two lines, gets.chomp.downcase! doesn't work
user_input.downcase!		# Include the ! so the string is modified in-place, otherwise Ruby will create a copy and modify that instead

if user_input.include? "s"		# Methods that end with ? evaluate to true or false
	user_input.gsub!(/s/, "th")	# Global SUBstitution, again ! so Ruby will change the string in-place
else
	puts "Nothing to do here!"
end
  
puts "Your string is: #{user_input}"

# LOOPS & ITERATORS
counter = 1
until counter > 10
	puts counter
	counter += 1 # There is no counter++ or counter-- in Ruby
end

for num in 1...10 # "..." means go up to but don't include, will print 1 through 9
	puts num
end

for num in 1..15 # ".." means go up and include, will print 1 through 15
	puts num
end